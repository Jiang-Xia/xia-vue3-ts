export interface Config {
  [propName: string]: string;
}

export interface ResearchData {
    research_id: string;
  }

  // 接受任意属性
export interface PostData {
    [propName: string]: string|number;
  }
export interface AnyProp {
  [propName: string]: string|number;
}