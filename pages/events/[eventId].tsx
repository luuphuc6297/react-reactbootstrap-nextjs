import { EventContainer } from '@containers';
import { eventApi } from 'apis';
import { Event, ListResponse } from 'models';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface EventListPage {
    data?: Event[];
}

export default function EventDetailPage(data: any) {
    if (!data) return null;

    return (
        <div>
            <h1>Event Detail Page</h1>
            <p>{data?.data.title}</p>
            <p>{data?.data.lastName}</p>
            <p>{data?.data.firstName}</p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response: any = await eventApi.getAll({
        page: 1,
        limit: 10,
    });

    return {
        paths: response.data.map((item: Event) => ({ params: { eventId: item?.id } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<EventListPage> = async (context: GetStaticPropsContext) => {
    const eventId: any = context?.params?.eventId;
    if (!eventId) return { notFound: true };

    const response: any = await eventApi.getById(eventId);

    return {
        props: {
            data: response?.data,
        },
    };
};
