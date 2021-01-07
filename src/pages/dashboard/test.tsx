import React from "react"
import { Button, Grid, Box } from "@material-ui/core"
import QuizPage from "../../components/quizPage"
import Instructions from "../../components/instructions"
import { ComponentProps } from "../_app"
import query from "../../components/relay/queries/GetQuizStatusQuery"
import { useQuery } from "relay-hooks"
import { GetQuizStatusQuery } from "../../__generated__/GetQuizStatusQuery.graphql"
import LoadingScreen from "../../components/loadingScreen"
import StartQuizMutation from "../../components/relay/mutations/StartQuizMutation"

const Team: React.FC<ComponentProps> = ({ viewer, environment, setSuccessMessage, refetch, setErrorMessage }) => {

    const { data, error, isLoading, retry } = useQuery<GetQuizStatusQuery>(query)
    if (isLoading) {
        return <LoadingScreen loading />
    }



    const [startQuiz, setStartQuiz] = React.useState(data.getQuizDetails.userQuizStatus != "NOT_STARTED")

    const handleStartQuiz = () => {
        StartQuizMutation(environment, {
            onCompleted: () => {
                setSuccessMessage("Quiz has Started")
                setStartQuiz(true)
            }, onError: () => { setErrorMessage("Something went wrong") }
        })
    }


    return startQuiz ? <QuizPage viewer={viewer} environment={environment}
        setSuccessMessage={setSuccessMessage} refetch={refetch}
        setErrorMessage={setErrorMessage} /> : <><Instructions
            setSuccessMessage={setSuccessMessage}
            setErrorMessage={setErrorMessage}
        />
            <Grid container spacing={0} alignItems="center" justify="center">
                <Box>
                    <Button onClick={handleStartQuiz} variant="contained" color="primary">Start Quiz</Button></Box>
            </Grid>

        </>
}

export default Team