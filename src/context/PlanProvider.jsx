/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PlanContext } from './PlanContext';

export const PlanProvider = ({ children }) => {
	const [monthly, setMonthly] = useState(true);

	return (
		<>
			<PlanContext.Provider value={{ monthly, setMonthly }}>{children}</PlanContext.Provider>
		</>
	);
};
