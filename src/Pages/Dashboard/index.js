import React, { useEffect } from 'react';
import { SEO } from 'Utils';
import { Container } from './styles';
import Title from 'Components/Title';
import ReportsBox from 'Components/ReportsBox';
import { COLORS } from 'Themes';
import Breadcrumbs from 'Components/Breadcrumbs';

function Dashboard() {
  useEffect(() => {
    SEO.changeDocumentTitle('Dashboard');
  });

  const data = [
    {
      label: 'Receita',
      value: 10000,
      styles: {
        boxBackgroundColor: COLORS.revenue,
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    },
    {
      label: 'Despesas',
      value: 3500,
      styles: {
        boxBackgroundColor: COLORS.expenses,
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    },
    {
      label: 'Líquido',
      value: 6500,
      styles: {
        boxBackgroundColor: COLORS.net,
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    },
    {
      label: 'Investimento',
      value: 150000,
      styles: {
        boxBackgroundColor: COLORS.investment,
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    }
  ];

  return (
    <Container>
      <Breadcrumbs data={[{ label: 'Dashboard' }]} />
      <Title>Dashboard</Title>
      <ReportsBox data={data} />
    </Container>
  );
}

export default Dashboard;
