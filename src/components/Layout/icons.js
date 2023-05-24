import PieChartIcon, {
  AnalyticsIcon,
  BalanceIcon,
  CheckoutIcon,
  ExchangeIcon,
  MarketingIcon,
  PaymentIcon,
  TransactionIcon,
  WireIcon,
} from '../../asset/icons/svgs';

export const SidebarIcons = (name, active) => {
  console.log('name.....', name);
  if (name === 'transaction') {
    return <TransactionIcon active={active} />;
  }

  if (name === 'dashboard') {
    return <PieChartIcon active={active} />;
  }

  if (name === 'balance') {
    return <BalanceIcon active={active} />;
  }

  if (name === 'analytics') {
    return <AnalyticsIcon active={active} />;
  }

  if (name === 'marketing') {
    return <MarketingIcon active={active} />;
  }

  if (name === 'exchange') {
    return <ExchangeIcon />;
  }

  if (name === 'checkout') {
    return <CheckoutIcon active={active} />;
  }

  if (name === 'payment') {
    return <PaymentIcon active={active} />;
  }

  if (name === 'wire') {
    return <WireIcon active={active} />;
  }
};
