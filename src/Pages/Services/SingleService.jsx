import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SingleCard from '../../Components/SingleCard';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SingleService = () => {
    const navigate =useNavigate()
    const data = useLoaderData()
    const [bookings, setBookings] = useState([]);

    const handleBookingConfirm = id => {
        fetch(`https://assignment11-royal-service.vercel.app/card/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                    navigate('/')
                    toast.success('Successfully booked!')
                }
            })
    }
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
                                handleBookingConfirm={handleBookingConfirm}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Electrician").map(d => <SingleCard
                                key={d._id}
                                data={d}
                                handleBookingConfirm={handleBookingConfirm}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Mechanic").map(d => <SingleCard
                                key={d._id}
                                data={d}
                                handleBookingConfirm={handleBookingConfirm}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Nurse").map(d => <SingleCard
                                key={d._id}
                                data={d}
                                handleBookingConfirm={handleBookingConfirm}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Plumber").map(d => <SingleCard
                                key={d._id}
                                data={d}
                                handleBookingConfirm={handleBookingConfirm}
                            ></SingleCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            data.filter(p => p.name === "Landscaper").map(d => <SingleCard
                                key={d._id}
                                data={d}
                                handleBookingConfirm={handleBookingConfirm}
                            ></SingleCard>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SingleService;