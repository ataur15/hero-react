import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useFoods from '../../../hooks/useFoods';
import Breakfast from '../Food/Breakfast/Breakfast';
import Dinner from '../Food/Dinner/Dinner';
import Lunch from '../Food/Lunch/Lunch';

const Foods = () => {
    const [foods, setFoods] = useFoods();

    return (
        <div className="mb-10 md:mb-20">
            <Tabs>
                <TabList className="text-center pb-10">
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            foods.filter(food => food.type === 'breakfast').map(filterFood => <Breakfast key={filterFood.id} filterFood={filterFood}></Breakfast>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            foods.filter(food => food.type === 'lunch').map(filterFood => <Lunch key={filterFood.id} filterFood={filterFood}></Lunch>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            foods.filter(food => food.type === 'dinner').map(filterFood => <Dinner key={filterFood.id} filterFood={filterFood}></Dinner>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Foods;