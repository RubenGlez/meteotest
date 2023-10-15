import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: {
        primary: string;
        secondary: string;
        active: string;
        inactive: string;
      };
      background: {
        base: string;
        level1: string;
        level2: string;
        level3: string;
      };
      utils: {
        danger: string;
        success: string;
      };
    };
  }
}
