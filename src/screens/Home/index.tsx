import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert
} from "react-native";
import { styles } from "./styles";

import Participant from "../../components/Participante";


export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  const handleParticipantAdd = () => {
    
    if(participants.includes(participantName)){
      return Alert.alert('Participante Existe', 'Já existe um participante na lista com este nome')
    }

    setParticipants(pv => [...pv, participantName]);
    setParticipantName('');
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover",`Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant != name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log(`Participante ${name} acaba de ser removido`)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Acampamento Marcados</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.qtdNames}>
          Quantidade: {participants.length}
      </Text>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={(name) => handleParticipantRemove(name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  );
}
