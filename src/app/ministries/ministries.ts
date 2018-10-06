import { ValueObject } from '@app/core/domain/models';

export class Ministries extends ValueObject {
  // tslint:disable-next-line:max-line-length
  header = 'The members of Staves are very mission minded. They love to share with the community and help where ever and when ever possible. Please review the list of ministries available at Staves and if you are interested in helping, please see our calendar of events for dates and times of meetings for these groups.';
  list: Ministry[] = [new Ministry(), new Ministry(), new Ministry(), new Ministry()];
}

export class Ministry extends ValueObject {
  name = 'Monthly Mission';
  // tslint:disable-next-line:max-line-length
  purpose = 'This program changes each month and allows Staves members to focus on a special area. Our Ministry Outreach team coordinates each of these programs.';
}
