export type ManagerPod = {
  role: string;
  teamLines: string[];
};

export type FlowDepartment = {
  label: string;
  /** Wider column on large screens (Engineering / Admin). */
  wide?: boolean;
  pods: ManagerPod[];
};

export const executives = [
  { role: 'Managing Director', name: 'Shital M. Pandya' },
  { role: 'Technical Director', name: 'Hardik N. Patel' },
] as const;

export const flowDepartments: FlowDepartment[] = [
  {
    label: 'Engineering',
    pods: [{ role: 'Eng. Manager', teamLines: ['8 Sr. Eng', '7 Jr. Eng', '60+ Labour'] }],
  },
  {
    label: 'Admin',
    pods: [{ role: 'Admin Mgr', teamLines: ['4+ Staff'] }],
  },
  {
    label: 'Purchase',
    pods: [{ role: 'Purchase Mgr', teamLines: ['2 Staff'] }],
  },
  {
    label: 'Accounting',
    pods: [{ role: 'Accounts Mgr', teamLines: ['2 Staff'] }],
  },
  {
    label: 'Sales',
    pods: [{ role: 'Sales Mgr', teamLines: ['2 Staff'] }],
  },
  {
    label: 'HR',
    pods: [{ role: 'HR Mgr', teamLines: ['1 Staff'] }],
  },
  {
    label: 'Safety',
    pods: [{ role: 'Safety Mgr', teamLines: [] }],
  },
];
