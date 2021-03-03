import StatsItem from 'Entities/stats-item';

export interface IStatsState {
  isShow: boolean;
  topTen: Array<StatsItem>;
}
