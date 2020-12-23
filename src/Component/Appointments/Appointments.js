import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Resources/images/doctors-portal-white.png';
import AppsIcon from '@material-ui/icons/Apps';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import './Appointments.css'
import Authentication from '../SignUp/Authentication';

const useStyles = makeStyles({
    table: {
      minWidth: 200
    },
});

const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2),
    },
  }));

  const TablePaginationActions = (props) => {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const Appointments = () => {
    const [Value, SetValue] = useState(new Date());
    const [AppData, SetAppData] = useState();
    const Auth = Authentication();
    useEffect(() => {
        fetch('https://taj-doctors-portal.herokuapp.com/getAppointment')
        .then(res => res.json())
        .then(data => {
            SetAppData(data)
        })
        .catch(err => {
            SetAppData(null)
        })
    }, [])
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <section>
                <div className="row dashboard_main_container">
                    <div className="col-lg-3 col-md-4 col-sm-12 dashboard_menu_main_container">
                        <div className="dashboard_menu_main_aria">
                            <div id='dashboard_logo'>
                                <Link to="/"><img src={Logo} alt="Logo"/></Link>
                            </div>
                            <ul className='dashboard_nav_list'>
                                <li><NavLink exact activeClassName='slider_active_class' to='/dashboard' className="dashboard_nav_link" ><AppsIcon /> Dashboard</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/appointments' className="dashboard_nav_link" ><DateRangeIcon /> Appointments</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/patients' className="dashboard_nav_link" ><PeopleOutlineIcon /> Patients</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/prescription' className="dashboard_nav_link" ><DescriptionIcon /> Prescription</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/setting' className="dashboard_nav_link" ><SettingsIcon /> Setting</NavLink></li>
                            </ul>
                            <div className="dashboard_logout_icon">
                                <p onClick={Auth.SignOutAccount}><ExitToAppIcon /> Sign Out</p>
                            </div>
                        </div>
                        <div className='dashboard_navbar'>
                            <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                                <Link to='/' className="navbar-brand" ><img src={Logo} alt="Logo"/></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/dashboard' className="nav-link hvr-underline-from-center" >Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/appointments' className="nav-link hvr-underline-from-center" >Appointments</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/patients' className="nav-link hvr-underline-from-center" >Patients</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/prescription' className="nav-link hvr-underline-from-center" >Prescription</NavLink>
                                        </li> 
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/setting' className="nav-link hvr-underline-from-center" >Setting</NavLink>
                                        </li>
                                        <li className="nav-item nav_item_hide">
                                            <span onClick={Auth.SignOutAccount} className="nav-link hvr-underline-from-center" >Sign out</span>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="dashboard_list_main_container">
                            <h3>Appointments</h3>
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                <Calendar 
                                    Value={Value}
                                    onChange={SetValue}
                                    showFixedNumberOfWeeks={true}
                                    className='appointments_date_picker'
                                />
                                </div>
                                <div className="col-lg-7 col-md-12 appointments_table_main_section">
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Name</TableCell>
                                                    <TableCell align="center">Schedule</TableCell>
                                                    <TableCell align="center">Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                { AppData && (rowsPerPage > 0 ? AppData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    : AppData).map((Item) => (
                                                    <TableRow key={Item._id}>
                                                        <TableCell component="th" scope="row">{Item.name}</TableCell>
                                                        <TableCell align="left">{Item.time}</TableCell>
                                                        <TableCell align="left"><button className='dashboard_view_btn'>Not Visited</button></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                            {
                                                AppData && <TableFooter>
                                                    <TableRow>
                                                        <TablePagination
                                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                                        count={AppData && AppData.length}
                                                        rowsPerPage={rowsPerPage}
                                                        page={page}
                                                        SelectProps={{
                                                            inputProps: { 'aria-label': 'rows per page' },
                                                            native: true,
                                                        }}
                                                        onChangePage={handleChangePage}
                                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                                        ActionsComponent={TablePaginationActions}
                                                        />
                                                    </TableRow>
                                                </TableFooter>
                                            }
                                        </Table>
                                    </TableContainer>
                                    {
                                        AppData === undefined && <p style={{color:"green", marginTop:"100px", textAlign:"center"}}>Data is loading. Please wait...</p>
                                    }
                                    {
                                        AppData === null && <p style={{color:"red", marginTop:"100px", textAlign:"center"}}>Data Not Loaded. Please Reload The Page</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Appointments;