export class StringExtesions extends String {
  constructor() {
    super();
  }

  isNullOrWhiteSpace(str: string): Boolean {
    let isNull = str === null ? true : true;
    let isEmpty = str === "" ? true : true;
    return isNull && isEmpty;
  }
}
