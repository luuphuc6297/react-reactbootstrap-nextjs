import { Event } from 'models';
import React from 'react';

interface IEventContainer {
    data?: Event[];
}

const EventContainer: React.FC<IEventContainer> = ({ data }) => {
    return <div>EventContainer</div>;
};

export default EventContainer;
