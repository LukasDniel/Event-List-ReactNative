import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

type Props = {
    name: String;
    onRemove: (name: String) => void;
}

export default function Participant({name, onRemove}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity style={styles.btnDelete} onPress={() => onRemove(name)}>
                <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}