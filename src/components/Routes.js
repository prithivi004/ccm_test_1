import React, { lazy, Suspense } from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';

/* import Profile from './Profile'
import Dashboard from './administration/dashboard/main'

import Addcontractor from './administration/contractor/Addcontractor'
import AddUser from './administration/user/AddUser'
import AddClient from './administration/client/AddClient'
import Contractorlist from './administration/contractor/Contractorlist'
import UserList from './administration/user/UserList'
import ClientList from './administration/client/ClientList'
import AddInvoice from './administration/billing/AddInvoice'
import QuotationList from './administration/billing/QuotationList'

import Login from './auth/Login'
import Logout from './auth/Logout'
import AddCountry from './AddCountry'
import NavBar from './Navbar'

import LandingPage from './administration/landingPage/LandingPage'
import ForgotPassword from './auth/Forgotpassword'
import AddQuotation from './administration/billing/AddQuotation'
import EditQuotation from './administration/billing/EditQuotation'
import TrashQuote from './administration/billing/TrashQuote'

import PasswordReset from './ForgotPassword'
import DummyNav from './DummyNav'
import UserForgotpwd from './UserForgotpwd'
import NewUserPwd from './NewUserPwd'
import Pending from './administration/billing/Status/Pending'
import Completed from './administration/billing/Status/Completed'
import Cancelled from './administration/billing/Status/Cancelled'
import AllQ from './administration/billing/Status/AllQ' */

const Profile = React.lazy(() => import("./Profile.js"));
const Dashboard = React.lazy(() => import("./administration/dashboard/main.js"));

const Addcontractor = React.lazy(() => import("./administration/contractor/Addcontractor.js"));
const AddUser = React.lazy(() => import("./administration/user/AddUser.js"));
const AddClient = React.lazy(() => import("./administration/client/AddClient.js"));
const Contractorlist = React.lazy(() => import("./administration/contractor/Contractorlist.js"));
const UserList = React.lazy(() => import("./administration/user/UserList.js"));
const ClientList = React.lazy(() => import("./administration/client/ClientList.js"));
const AddInvoice = React.lazy(() => import("./administration/billing/AddInvoice.js"));
const QuotationList = React.lazy(() => import("./administration/billing/QuotationList.js"));

const Login = React.lazy(() => import("./auth/Login.js"));
const Logout = React.lazy(() => import("./auth/Logout.js"));
const AddCountry = React.lazy(() => import("./AddCountry.js"));
const NavBar = React.lazy(() => import("./Navbar.js")); 

const LandingPage = React.lazy(() => import("./administration/landingPage/LandingPage.js"));
const ForgotPassword = React.lazy(() => import("./auth/Forgotpassword.js"));
const AddQuotation = React.lazy(() => import("./administration/billing/AddQuotation.js"));
const EditQuotation = React.lazy(() => import("./administration/billing/EditQuotation.js"));
const TrashQuote = React.lazy(() => import("./administration/billing/TrashQuote.js"));

const PasswordReset = React.lazy(() => import("./ForgotPassword.js"));
const DummyNav = React.lazy(() => import("./DummyNav.js"));
const UserForgotpwd = React.lazy(() => import("./UserForgotpwd.js"));
const NewUserPwd = React.lazy(() => import("./NewUserPwd.js"));
const Pending = React.lazy(() => import("./administration/billing/Status/Pending.js"));
const Completed = React.lazy(() => import("./administration/billing/Status/Completed.js"));
const Cancelled = React.lazy(() => import("./administration/billing/Status/Cancelled.js"));
const AllQ = React.lazy(() => import("./administration/billing/Status/AllQ.js"));

// import AddInvClient from './administration/billing/AddInvoiceClient';
// import AddInvContractor from './administration/billing/AddInvContractor';
// import ClientPayment from './administration/billing/ClientPayments'
// import ContractorPayment from './administration/billing/ContractorPayment'

//import Client from './components/Client'
//import Contractor from './components/Contractor'
// import Quotation from './components/Quotation'
// import ContractorInvoice from './components/ContractorInvoice'
// import BarChart from './components/BarChart'
// import Chart from './components/Chart'

export default function BaseRouter() {

  const isLogin = localStorage.getItem('isLogin')
  return(
    <>
    
    <Switch>  
    <Route exact path="/" >
		<Suspense fallback={<h1>Still Loading…</h1>}>
			<Login />
		</Suspense>
	</Route>
    <Route exact path="/logout" >
		<Suspense fallback={<h1>Still Loading…</h1>}>
			<Logout />
		</Suspense>
	</Route>

      <Route exact path="/profile">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <Profile /></>:<Redirect to='/' />}
		</Suspense>
      </Route>

      <Route exact path="/country">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin? <><NavBar /><AddCountry /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/dashboard">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin? <><NavBar /><Dashboard /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      
      <Route exact path="/addinvoice">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <AddInvoice /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/addQuotation">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <AddQuotation /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      {/* <Route exact path="/editQuotation/:id" component={EditQuotation}> */}
        {/* {isLogin?<><NavBar /> <EditQuotation /></>:<Redirect to='/' />} */}
      {/* </Route> */}
      <Route exact path="/editQuotation/:id">
		<Suspense fallback={<h1>Still Loading…</h1>}>
		{isLogin?
		  <>
			<NavBar/>
			<EditQuotation {...props}/>
		  </>:<Redirect to='/' />
		}
		</Suspense>
	  </Route>
      <Route exact path="/cwr-summary">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <QuotationList /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/cwr-summary/2">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <Pending /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/cwr-summary/1">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <Completed /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/cwr-summary/3">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <Cancelled /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/cwr-summary/4">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <AllQ /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/UserProfile">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin? <><NavBar /><AddUser /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/user-list">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <UserList /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/Contractor-list">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <Contractorlist /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/addcontractor">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin? <><NavBar /><Addcontractor /> </>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/addclient">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin? <><NavBar /><AddClient /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/client-list">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /> <ClientList /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/trash">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin?<><NavBar /><TrashQuote/></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      
      <Route exact path="/forgot-password">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin? <><NavBar /><ForgotPassword /></>:<Redirect to='/' />}
		</Suspense>
      </Route>
      <Route exact path="/list">
		<Suspense fallback={<h1>Still Loading…</h1>}>
        {isLogin? <><NavBar /><LandingPage /></>:<Redirect to='/' />}
		</Suspense>
      </Route>

      <Route exact path="/forgotpassword">
		<Suspense fallback={<h1>Still Loading…</h1>}>
       <><DummyNav/> <PasswordReset/></>
	   </Suspense>
      </Route>

      <Route exact path='/reset_password/:hash?'>
	  <Suspense fallback={<h1>Still Loading…</h1>}>
      <><DummyNav/> <UserForgotpwd/></>
	  </Suspense>
      </Route>
	  
      <Route exact path='/activate/:hash?'>
	  <Suspense fallback={<h1>Still Loading…</h1>}>
      <><DummyNav/><NewUserPwd/></>
	  </Suspense>
      </Route>

{/* 
      <Route exact path="/addinvoice/client">
        {isLogin? <><NavBar /><AddInvClient /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addinvoice/contractor">
        {isLogin? <><NavBar /><AddInvContractor /></>:<Redirect to='/' />}
      </Route> */}
      {/* <Route exact path="/payments/client">
        {isLogin? <><NavBar /><ClientPayment /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/payments/contractor">
        {isLogin? <><NavBar /><ContractorPayment /></>:<Redirect to='/' />}
      </Route> */}


      {/* <Route exact path="/contractor">
        {isLogin? <><NavBar /><Contractor /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/client">
        {isLogin?<><NavBar /> <Client /></>:<Redirect to='/' />}
      </Route>
       <Route exact path="/addQuotation">
        {isLogin?<><NavBar /> <AddQuotation /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/contractorinvoice">
        {isLogin? <><NavBar /><ContractorInvoice /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/barchart">
        {isLogin? <><NavBar /><BarChart /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/chart">
        {isLogin? <><NavBar /><Chart /></>:<Redirect to='/' />}
      </Route> */}

      </Switch>
      
    </>
  )
}
  