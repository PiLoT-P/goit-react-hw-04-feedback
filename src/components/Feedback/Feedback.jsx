import { useState } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

const Feedback = ()=>{
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const hendelGood = () => {
        setGood((prev) => prev + 1);
    }

    const hendelNeutral = () => {
        setNeutral((prev) => prev + 1);
    }

    const hendelBad = () => {
        setBad((prev) => prev + 1);
    }

    let total = 0;
    const countTotalFeedback = () => {
        total = good + neutral + bad;
        return total;    
    };
    const countPositiveFeedbackPercentage = () => {
        const persent = Math.ceil(100 / total * good);
        return persent;    
    };

    return (
        <>
            <Section title={'Pleace leave FeedBack'}>
                <FeedbackOptions
                hendelGood={hendelGood}
                hendelNeutral={hendelNeutral}
                hendelBad={hendelBad} />
            </Section>
            <Section title={'Statistics'}>
                {countTotalFeedback() === 0 ? <Notification message={'There is no feedback'} /> : <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    countTotalFeedback={countTotalFeedback}
                    countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
                />}
            </Section>
        </>
    );
}

export default Feedback;