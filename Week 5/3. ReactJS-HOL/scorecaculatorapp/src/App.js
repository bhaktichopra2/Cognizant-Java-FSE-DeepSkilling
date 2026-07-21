import { CalculateScore } from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                Name="Bhakti"
                School="VIT Bhopal"
                total={284}
                goal={3}
            />
        </div>
    );
}

export default App;