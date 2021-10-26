import { Event, ListParams, ListResponse } from 'models';
import request from '@lib/request';

const eventApi = {
    getAll(params: ListParams): Promise<ListResponse<Event>> {
        const url = '/event';
        return request.get(url, { params });
    },
    getById(id: string): Promise<Event> {
        const url = `/event/${id}`;
        return request.get(url);
    },
    add(data: Event): Promise<Event> {
        const url = '/event';
        return request.post(url, data);
    },
    update(data: Event): Promise<Event> {
        const url = '/event';
        return request.patch(url, data);
    },
    remove(id: string): Promise<any> {
        const url = `/event/${id}`;
        return request.delete(url);
    },
};

export default eventApi;
