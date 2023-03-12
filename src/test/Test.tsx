import { useQueries, useQuery } from "react-query"
import { getTest } from "../api/testUser.api"
import { TestModel } from "../types/common.types"

export const Test = () => {


    const { data } = useQuery<TestModel[]>('getTest', getTest, {
        refetchInterval:1000
    })
    return (
        <ul>

            {
                data?.map(test => <li>
                    {test.name}
                </li>)
            }
        </ul>

    )

}