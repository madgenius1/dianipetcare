export type ServiceType =
  | 'grooming'
  | 'walking'
  | 'sitting'
  | 'transport'
  | 'boarding'
  | 'training'
  | ''

export const SERVICE_PRICES: Record<Exclude<ServiceType, ''>, number> = {
  grooming: 3400,
  walking: 1000,
  sitting: 800,
  transport: 1000,
  boarding: 1200,
  training: 25000,
}