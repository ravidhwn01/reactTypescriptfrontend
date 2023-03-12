import { QueryClient } from "react-query";

export const client  = new QueryClient({
    defaultOptions:{
        queries:{
            // refetchInterval:4000
        }
    }

});