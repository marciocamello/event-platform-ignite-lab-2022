import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
    query {
        lessons {
            id
            title

            teacher {
                name
            }
        }
    }
`;

interface Lesson {
    id: string;
    title: string;
    teacher: {
        name: string;
    }
}

function App() {
    const { data, loading, error } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

    return (
        <ul>
            {loading
                ? <p>Loading...</p>
                : <>
                    {data?.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title} - {lesson.teacher.name}
                        </li>
                    ))}
                </>
            }
        </ul>
    )
}

export default App
