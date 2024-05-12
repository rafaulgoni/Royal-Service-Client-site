import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../../Components/SingleCard';

const SingleService = () => {
    const data = useLoaderData()
    return (
        <div className='container mx-auto mt-10 mb-10 space-y-7'>
            <div className='space-y-7'>
                <Tabs>
                    <TabList>
                        <Tab>Cleaner</Tab>
                        <Tab>Electrician</Tab>
                        <Tab>Mechanic</Tab>
                        <Tab>Nurse</Tab>
                        <Tab>Plumber</Tab>
                        <Tab>Landscaper</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            data.filter(p => p.name === "Cleaner").map(d => <SingleCard
                                key={d._id}
                                data={d}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Electrician").map(d => <SingleCard
                                key={d._id}
                                data={d}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Mechanic").map(d => <SingleCard
                                key={d._id}
                                data={d}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Nurse").map(d => <SingleCard
                                key={d._id}
                                data={d}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Plumber").map(d => <SingleCard
                                key={d._id}
                                data={d}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Landscaper").map(d => <SingleCard
                                key={d._id}
                                data={d}
                            ></SingleCard>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SingleService;