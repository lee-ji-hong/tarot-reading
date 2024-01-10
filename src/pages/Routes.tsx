import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import StartPage from './StartPage';
import ResultPage from './ResultPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="*" element={<Navigate replace to="/start" />} />
    </ReactRouterRoutes>
  );
};
