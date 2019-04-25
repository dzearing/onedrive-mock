import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { StyleHelpers } from "./StyleHelpers";
import { SemiBoldFont, BodyFont } from "./fonts";
import * as ThemeVariables from "./themeVariables";
const { styled } = StyleHelpers;

export interface ITiming {
  total: number;
  min: number;
  max: number;
  count: number;
  average: number;
}

export interface ITimeTestTimings {
  mount: ITiming;
  rerender: ITiming;
  unmount: ITiming;
}

interface ITimeTestProps {
  timings: ITimeTestTimings;
  onComplete: () => void;
}

class TimeTest extends React.Component<ITimeTestProps> {
  private _lastStartTime: number = performance.now();

  public constructor(props: ITimeTestProps) {
    super(props);
    performance.mark("create");
  }

  public render() {
    performance.mark("render");

    return <>{this.props.children}</>;
  }

  public componentDidMount() {
    _addMeasurement(
      this.props.timings.mount,
      performance.now() - this._lastStartTime
    );
    this._lastStartTime = performance.now();

    this.forceUpdate();

    performance.mark("mount");
  }

  public componentDidUpdate() {
    performance.mark("update");

    _addMeasurement(
      this.props.timings.rerender,
      performance.now() - this._lastStartTime
    );
    this._lastStartTime = performance.now();
    requestAnimationFrame(() => this.props.onComplete());
  }
}

function _createTiming(): ITiming {
  return {
    total: 0,
    min: Number.MAX_VALUE,
    max: 0,
    count: 0,
    average: 0
  };
}

function _createTimings(): ITimeTestTimings {
  return {
    mount: _createTiming(),
    rerender: _createTiming(),
    unmount: _createTiming()
  };
}

function _addMeasurement(timing: ITiming, duration: number) {
  timing.total += duration;
  timing.min = Math.min(duration, timing.min);
  timing.max = Math.max(duration, timing.max);
  timing.count++;
}

function _finalizeMeasurements(timings: ITimeTestTimings) {
  for (const timingName in timings) {
    if (timings.hasOwnProperty(timingName)) {
      const timing = timings[timingName];

      timing.average = Math.round(timing.total / timing.count);
      timing.min = Math.round(timing.min);
      timing.max = Math.round(timing.max);
    }
  }

  performance.measure("");
}

export interface IMeasureOptions {
  content: JSX.Element;
  element: HTMLElement;
  instances: number;
  iterations: number;
}

export function measureRender({
  content,
  element,
  instances,
  iterations
}: IMeasureOptions): Promise<ITimeTestTimings> {
  const timings = _createTimings();
  let iterationsLeft = iterations;

  return new Promise<ITimeTestTimings>(resolve => {
    function completeRender() {
      const now = performance.now();
      performance.mark("unmount-start");
      unmountComponentAtNode(element);
      performance.mark("unmount");
      _addMeasurement(timings.unmount, performance.now() - now);
      setTimeout(nextRender, 100);
    }

    function nextRender() {
      if (iterationsLeft > 0) {
        iterationsLeft--;

        render(
          <TimeTest timings={timings} onComplete={completeRender}>
            {Array.from({ length: instances }, (item, i) => (
              <div key={i}>{content}</div>
            ))}
          </TimeTest>,
          element
        );
      } else {
        _finalizeMeasurements(timings);
        resolve(timings);
      }
    }

    nextRender();
  });
}

const TimingRoot = styled.div`
  ${props => props.theme.strong}

  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 6.4px 14.4px 0 var(--callout-shadow-color, rgba(0, 0, 0, 0.132)),
    0 1.2px 3.6px 0 var(--callout-shadow-secondary-color, rgba(0, 0, 0, 0.108));
  bottom: 30px;
  right: 30px;
  padding: 20px;
  font-size: 12px;

  & > * {
    margin-top: 16px;
  }

  & > *:first-child {
    margin-top: auto;
  }
`;

export interface ITimingProps {
  timings: ITimeTestTimings;
  options: IMeasureOptions;
}

export const Table = styled.div`
  display: grid;
  grid-template-columns: [col-start] repeat(${props => props.columns}, auto) [col-end];
  grid-auto-rows: auto;
  grid-gap: 8px;
  justify-content: start;
`;

export const HeaderCell = styled.div`
  ${SemiBoldFont}
  text-align: ${props => (props.right ? "right" : "left")};  
`;
export const TextCell = styled.div`
  ${BodyFont}
`;

const Separator = styled.div`
  border-bottom: 1px solid var(${ThemeVariables.BorderColor});
`;

const Red = styled.div`
  background: red;
`;

export const Timing = ({ timings, options }: ITimingProps) => (
  <TimingRoot>
    <Table columns={2}>
      <HeaderCell>Iterations</HeaderCell>
      <TextCell>{options.iterations}x</TextCell>
      <HeaderCell>Instances</HeaderCell>
      <TextCell>{options.instances} item(s)</TextCell>
    </Table>

    <Table columns={4}>
      <HeaderCell style={{ gridRow: 1, gridColumn: 1 }}>Scenario</HeaderCell>
      <HeaderCell style={{ gridRow: 1, gridColumn: 2 }}>Average</HeaderCell>
      <HeaderCell style={{ gridRow: 1, gridColumn: 3 }}>Min</HeaderCell>
      <HeaderCell style={{ gridRow: 1, gridColumn: 4 }}>Max</HeaderCell>
      <Separator style={{ gridRow: 2, gridColumn: "col-start/col-end" }} />

      {Object.keys(timings).map((scenario, rowIndex) => (
        <>
          <HeaderCell right style={{ gridRow: 3 + rowIndex, gridColumn: 1 }}>
            {scenario}
          </HeaderCell>
          <TextCell
            style={{
              gridRow: 3 + rowIndex,
              gridColumn: 2
            }}
          >
            {timings[scenario].average}ms
          </TextCell>
          <TextCell
            style={{
              gridRow: 3 + rowIndex,
              gridColumn: 3
            }}
          >
            {timings[scenario].min}ms
          </TextCell>
          <TextCell
            style={{
              gridRow: 3 + rowIndex,
              gridColumn: 4
            }}
          >
            {timings[scenario].max}ms
          </TextCell>
        </>
      ))}
    </Table>
  </TimingRoot>
);
