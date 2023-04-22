type MouseVariant = {
  DPI: string;
  Pooling: string;
  Cable: string;
};

type KeyboardVariant = {
  Switches: string;
  Backlight: string;
  Cable: string;
};

type MonitorVariant = {
  Resolution: string;
  RefreshRate: string;
  ResponseTime: string;
};

type HeadphoneVariant = {
  FrequencyResponse: string;
  Impedance: string;
  Sensitivity: string;
};
type LaptopVariant = {
  CPU: string;
  GPU?: string;
  RAM: string;
  Storage: string;
  ScreenSize: string;
  ScreenResolution: string;
  ScreenRefreshRate: string;
  other: string;
};

export type Product = {
  price: string;
  type: string;
  description: string;
  brand: string;
  name: string;
  image: string;
  rating: number;

  Attributes:
    | MouseVariant
    | KeyboardVariant
    | MonitorVariant
    | HeadphoneVariant
    | LaptopVariant;
};
