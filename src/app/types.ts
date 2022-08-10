/*type Todo{
  isChecked: boolean;
  sentence: string;

}*/


export class Types{
  public isChecked: boolean;
  public sentence: string;

  constructor(isChecked: boolean, sentence: string){
    this.isChecked= isChecked;
    this.sentence=sentence;
  }
}