import { defineQuery, FilteredResponseQueryOptions } from 'next-sanity';
import { client } from './sanityClient';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';

const OPERATION_QUERY = defineQuery('*[_type == "einsatz"]{ _id, title, locality, date, category, ffNr, frNr, slug }');

const options: FilteredResponseQueryOptions = { next: { revalidate: 30 } };

class OperationService {
  getOperations = async (): Promise<OPERATION_QUERYResult> => {
    return client.fetch<OPERATION_QUERYResult>(OPERATION_QUERY, {}, options);
  };
}

const operationService = new OperationService();

export default operationService;
export { OPERATION_QUERY };
