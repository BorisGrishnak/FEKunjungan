import DataTable, { createTheme } from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';

export default function DatatableDashboard() {
    
const columns = [
    {
        name: 'Nama',
        selector: row => row.namatamu,
    },
    {
        name: 'Email',
        selector: row => row.emailtamu,
    },
    {
        name: 'Kepentingan',
        selector: row => row.kepentingan,
    },
];

const { currentTheme } = useThemeProvider();

const data = [
    {
        id: 1,
        namatamu: 'Jalal',
        emailtamu: 'jalal@gmail.com',
        kepentingan: 'Meeting',
    },
    {
        id: 2,
        namatamu: 'Darmaji',
        emailtamu: 'darmaji@gmail.com',
        kepentingan: 'Meeting',
    },
    {
        id: 3,
        namatamu: 'Suroto',
        emailtamu: 'suroto@gmail.com',
        kepentingan: 'Meeting',
    },
    {
        id: 4,
        namatamu: 'Togik',
        emailtamu: 'togik@gmail.com',
        kepentingan: 'Meeting',
    },
]

    return (
        <DataTable
            pagination
            fixedHeader
            fixedHeaderScrollHeight="300px"
            responsive
            columns={columns}
            data={data}
            theme={currentTheme}
        />
    );
}