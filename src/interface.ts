export type RenderFunc<T> = (
  item: T,
  index: number,
  props: { style?: React.CSSProperties },
) => React.ReactNode;

export interface SharedConfig<T> {
  getKey: (item: T) => React.Key;
}

export type GetKey<T> = (item: T) => React.Key;

export interface ExtraRenderInfo {
  /** Virtual list start line */
  start: number;
  /** Virtual list end line */
  end: number;
  /** Is current in virtual render */
  virtual: boolean;
  /** Used for `scrollWidth` tell the horizontal offset */
  offsetX: number;

  rtl: boolean;
}
