import { EventContainer } from '@containers';
import { eventApi } from 'apis';
import { Event, ListResponse } from 'models';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

export interface EventListPage {
    data?: Event[];
}

export default function EventListPage(data: any) {
    // return <EventContainer data={data} />;
    return (
        <div>
            <h1>Event List Page</h1>
            {data?.data.map((item: Event) => (
                <li key={item?.id}>
                    <Link href={`/events/${item?.id}`}>
                        <p>{item?.title}</p>
                    </Link>
                </li>
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps<EventListPage> = async (context: GetStaticPropsContext) => {
    const response: ListResponse<Event> = await eventApi.getAll({
        page: 1,
        limit: 10,
    });

    return {
        props: {
            data: response.data,
        },
    };
};
