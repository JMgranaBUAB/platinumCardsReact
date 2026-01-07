import { useState, useEffect } from 'react';
import Header from './components/Header';
import PlatformSection from './components/PlatformSection';

function App() {
    const [platinumPS5, setPlatinumPS5] = useState([]);
    const [platinumPS4, setPlatinumPS4] = useState([]);
    const [platinumVita, setPlatinumVita] = useState([]);
    const [platinumPS3, setPlatinumPS3] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPlatinumData = async () => {
            try {
                const [ps5Data, ps4Data, vitaData, ps3Data] = await Promise.all([
                    fetch('/data/platinumPS5.json').then(res => res.json()),
                    fetch('/data/platinumPS4.json').then(res => res.json()),
                    fetch('/data/platinumVita.json').then(res => res.json()),
                    fetch('/data/platinumPS3.json').then(res => res.json())
                ]);

                setPlatinumPS5(ps5Data);
                setPlatinumPS4(ps4Data);
                setPlatinumVita(vitaData);
                setPlatinumPS3(ps3Data);
                setLoading(false);
            } catch (error) {
                console.error('Error al cargar los datos de platinos:', error);
                setLoading(false);
            }
        };

        loadPlatinumData();
    }, []);

    const totalCount = platinumPS5.length + platinumPS4.length + platinumVita.length + platinumPS3.length;

    if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Cargando platinos...</h2>
            </div>
        );
    }

    return (
        <>
            <Header totalCount={totalCount} />
            <main>
                <PlatformSection
                    logo="/ps5.png"
                    platformName="PS5"
                    platinums={platinumPS5}
                    count={platinumPS5.length}
                />
                <PlatformSection
                    logo="/ps4.png"
                    platformName="PS4"
                    platinums={platinumPS4}
                    count={platinumPS4.length}
                />
                <PlatformSection
                    logo="/psvita.png"
                    platformName="PSVita"
                    platinums={platinumVita}
                    count={platinumVita.length}
                />
                <PlatformSection
                    logo="/ps3.png"
                    platformName="PS3"
                    platinums={platinumPS3}
                    count={platinumPS3.length}
                />
            </main>
        </>
    );
}

export default App;
