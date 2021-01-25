import ServiceCollection from './serviceCollection';
import { InstantiationService } from './instantiation-service';
import { createDecorator } from './instantiation';
import { SyncDescriptor } from './descriptors';

const services = new ServiceCollection();
const instantiationService = new InstantiationService(services);

export default instantiationService;

export {
    createDecorator,
    services,
    SyncDescriptor
}
