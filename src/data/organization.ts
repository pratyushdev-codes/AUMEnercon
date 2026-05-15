export type ManagerPod = {
  /** Optional; omitted when the chart shows teams only (no manager title row). */
  role?: string;
  teamLines: string[];
};

export type FlowDepartment = {
  label: string;
  /** Wider column on large screens (Engineering / Admin). */
  wide?: boolean;
  pods: ManagerPod[];
};

export const executives = [{ role: 'Technical Director', name: 'Hardik N. Patel' }] as const;

export const flowDepartments: FlowDepartment[] = [
  {
    label: 'Engineering',
    pods: [{ teamLines: ['8 Sr. Eng', '7 Jr. Eng', '60+ Labour'] }],
  },
  {
    label: 'Admin',
    pods: [{ teamLines: ['1 Staff'] }],
  },
  {
    label: 'Purchase',
  pods: [{ teamLines: ['1 Staff'] }],
  },
  {
    label: 'Accounting',
    pods: [{ teamLines: ['2 Staff'] }],
  },
  {
    label: 'Sales',
    pods: [{ teamLines: ['2 Staff'] }],
  },
  {
    label: 'HR',
    pods: [{ teamLines: ['1 Staff'] }],
  },
  {
    label: 'Safety',
    pods: [{ teamLines: [] }],
  },
];
