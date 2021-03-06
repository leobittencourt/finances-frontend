import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from 'Pages/Dashboard';
import Login from 'Pages/Login';
import DashboardLayout from 'Layout/Dashboard';
import Companies from 'Pages/Companies';
import CompaniesAdd from 'Pages/Companies/Add';
import CompaniesEdit from 'Pages/Companies/Edit';
import Revenue from 'Pages/Revenue';
import Expenses from 'Pages/Expenses';
import Investments from 'Pages/Investments';
import InvestmentsTypes from 'Pages/InvestmentsTypes';
import InvestmentsTypesAdd from 'Pages/InvestmentsTypes/Add';
import RevenueAdd from 'Pages/Revenue/Add';
import ExpensesAdd from 'Pages/Expenses/Add';
import ExpensesEdit from 'Pages/Expenses/Edit';
import InvestmentsAdd from 'Pages/Investments/Add';
import InvestmentsEdit from 'Pages/Investments/Edit';
import ForgotPassword from 'Pages/ForgotPassword';
import { Auth } from 'Utils';
import BillingCyclesCategories from 'Pages/BillingCyclesCategories';
import BillingCyclesCategoriesAdd from 'Pages/BillingCyclesCategories/Add';
import BillingCyclesCategoriesEdit from 'Pages/BillingCyclesCategories/Edit';
import BillingCyclesTypes from 'Pages/BillingCyclesTypes';
import BillingCyclesTypesAdd from 'Pages/BillingCyclesTypes/Add';
import BillingCyclesTypesEdit from 'Pages/BillingCyclesTypes/Edit';
import RevenueEdit from 'Pages/Revenue/Edit';
import InvestmentsTypesEdit from 'Pages/InvestmentsTypes/Edit';

const PrivateRoute = ({ component: Component, layout: Layout, verifyRole, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (Auth.isAuthenticated()) {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }
      return <Redirect to="/login" />;
    }}
  />
);

const Routes = (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/forgot-password" component={ForgotPassword} />

    <PrivateRoute exact path="/dashboard" component={Dashboard} layout={DashboardLayout} />

    {/* COMPANIES */}
    <PrivateRoute exact path="/companies" component={Companies} layout={DashboardLayout} />
    <PrivateRoute exact path="/companies/add" component={CompaniesAdd} layout={DashboardLayout} />
    <PrivateRoute exact path="/companies/edit/:id" component={CompaniesEdit} layout={DashboardLayout} />

    {/* REVENUE */}
    <PrivateRoute exact path="/revenue" component={Revenue} layout={DashboardLayout} />
    <PrivateRoute exact path="/revenue/add" component={RevenueAdd} layout={DashboardLayout} />
    <PrivateRoute exact path="/revenue/edit/:id" component={RevenueEdit} layout={DashboardLayout} />

    {/* EXPENSES */}
    <PrivateRoute exact path="/expenses" component={Expenses} layout={DashboardLayout} />
    <PrivateRoute exact path="/expenses/add" component={ExpensesAdd} layout={DashboardLayout} />
    <PrivateRoute exact path="/expenses/edit/:id" component={ExpensesEdit} layout={DashboardLayout} />

    {/* INVESTMENTS */}
    <PrivateRoute exact path="/investments" component={Investments} layout={DashboardLayout} />
    <PrivateRoute exact path="/investments/add" component={InvestmentsAdd} layout={DashboardLayout} />
    <PrivateRoute exact path="/investments/edit/:id" component={InvestmentsEdit} layout={DashboardLayout} />

    {/* INVESTMENTS TYPES */}
    <PrivateRoute exact path="/investments-types" component={InvestmentsTypes} layout={DashboardLayout} />
    <PrivateRoute exact path="/investments-types/add" component={InvestmentsTypesAdd} layout={DashboardLayout} />
    <PrivateRoute exact path="/investments-types/edit/:id" component={InvestmentsTypesEdit} layout={DashboardLayout} />

    {/* BILLING CYCLES CATEGORIES */}
    <PrivateRoute
      exact
      path="/billing-cycles-categories"
      component={BillingCyclesCategories}
      layout={DashboardLayout}
    />
    <PrivateRoute
      exact
      path="/billing-cycles-categories/add"
      component={BillingCyclesCategoriesAdd}
      layout={DashboardLayout}
    />
    <PrivateRoute
      exact
      path="/billing-cycles-categories/edit/:id"
      component={BillingCyclesCategoriesEdit}
      layout={DashboardLayout}
    />

    {/* BILLING CYCLES TYPES */}
    <PrivateRoute exact path="/billing-cycles-types" component={BillingCyclesTypes} layout={DashboardLayout} />
    <PrivateRoute exact path="/billing-cycles-types/add" component={BillingCyclesTypesAdd} layout={DashboardLayout} />
    <PrivateRoute
      exact
      path="/billing-cycles-types/edit/:id"
      component={BillingCyclesTypesEdit}
      layout={DashboardLayout}
    />
  </Switch>
);

export default Routes;
