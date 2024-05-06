declare module '@mui/material' {
  interface TypographyPropsVariantOverrides {
    footer: true;
    h1: true;
    h2: true;
    h3: true;
    subheader1: true;
    subheader2: true;
    title1: true;
    title2: true;
    button1: true;
    button2: true;
    menutopbar: true;
    body: true;
    description: true;
  }

  interface TypographyClasses {
    footer: string;
    h1: string;
    h2: string;
    h3: string;
    subheader1: string;
    subheader2: string;
    title1: string;
    title2: string;
    button1: string;
    button2: string;
    menutopbar: string;
    body: string;
    description: string;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    footer?: React.CSSProperties;
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    subheader1?: React.CSSProperties;
    subheader2?: React.CSSProperties;
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    menutopbar?: React.CSSProperties;
    body?: React.CSSProperties;
    description?: React.CSSProperties;
  }

  interface TypographyVariants {
    footer: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    subheader1: React.CSSProperties;
    subheader2: React.CSSProperties;
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    menutopbar: React.CSSProperties;
    body: React.CSSProperties;
    description: React.CSSProperties;
  }
}

export {};
