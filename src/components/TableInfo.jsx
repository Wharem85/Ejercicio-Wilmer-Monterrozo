import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';


import verified from '../assets/icons/verified.svg';
import reloj from '../assets/icons/icons8-reloj-24.png';
import '../assets/styles/Table.css';

function createData(name, state, date, effectiveness) {
  return { name, state, date, effectiveness};
}


const rows = [
  createData('Mensaje de prueba', 'En revision', '15-07-2021 15:59', '0%'),
  createData('Bienvenida', 'Verificado', '01-07-2021 00:00', '0%'),
  createData('Orden por llegar', 'Verificado', '01-01-2021 00:00', '0%'),
  createData('Pedidos', 'Verificado', '01-01-2021 00:00', '0%'),
  createData('Actualizacion de seguimiento', 'Verificado', '02-10-2020 07:00', '0%'),
	createData('Mensaje de prueba', 'En revision', '15-07-2021 15:59', '0%'),
  createData('Mensaje de prueba', 'En revision', '15-07-2021 15:59', '0%'),
  createData('Pedidos', 'Verificado', '01-01-2021 00:00', '0%'),
  createData('Actualizacion de seguimiento', 'Verificado', '02-10-2020 07:00', '0%'),
	createData('Mensaje de prueba', 'En revision', '15-07-2021 15:59', '0%'),
  createData('Bienvenida', 'Verificado', '01-07-2021 00:00', '0%'),
  createData('Orden por llegar', 'Verificado', '01-01-2021 00:00', '0%'),
  createData('Pedidos', 'Verificado', '01-01-2021 00:00', '0%'),
  createData('Mensaje de prueba', 'En revision', '15-07-2021 15:59', '0%'),
	createData('Pedidos', 'Verificado', '01-01-2021 00:00', '0%'),
];

const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;
		color: white;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
`;

const TableInfo = () => {
	const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

	return (
		<div className="container">
			<TableContainer>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className="titulo"><p className="title">Titulo</p></TableCell>
							<TableCell align="left"><p className="title">Estado</p></TableCell>
							<TableCell align="left"><p className="title">Fecha de creacion</p></TableCell>
							<TableCell align="left"><p className="title">Efectividad</p></TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="table">
						{(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell className="border" component="th" scope="row">
									<p className="letter">{row.name}</p>
								</TableCell>
								<TableCell className="border" align="left">
									<div className="icon">
										<p className="states">{row.state}</p>
										{row.state.length <= 10 ? <img src={verified} className="ver"></img> : <img src={reloj} className="reloj"></img>}
									</div>
								</TableCell>
								<TableCell className="border" align="left"><p className="letter">{row.date}</p></TableCell>
								<TableCell className="border" align="left"><p className="letter">{row.effectiveness}</p></TableCell>
							</TableRow>
						))}
					</TableBody>
					<tfoot>
          <tr className="pagination">
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableInfo;
