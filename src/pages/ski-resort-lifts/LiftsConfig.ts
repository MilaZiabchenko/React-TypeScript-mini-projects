export namespace LiftsConfig {
  type LiftStatus = 'OPEN' | 'CLOSED' | 'HOLD';

  export type TrailAccess = {
    trailId: string;
    trailName: string;
    trailTrees: boolean;
  };

  export type Lift = {
    liftId?: string;
    position?: number;
    liftName: string;
    liftStatus: LiftStatus;
    elevationGain: number;
    nightSkiing: boolean;
    trailAccess: TrailAccess[];
  };

  type AllLifts = {
    allLifts: Lift[];
  };

  export type Lifts = {
    data: AllLifts;
  };
}
