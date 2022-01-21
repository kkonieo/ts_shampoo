import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
        background: string;
        main: string;
        sub: string;
    };
  }
}