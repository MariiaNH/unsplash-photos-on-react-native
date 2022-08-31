import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  main: {
    flex: 1, 
    padding: 10, 
    backgroundColor: '#52d6c8',
  },

  title: {
    textAlign: 'center', 
    fontSize: 20, 
    fontWeight: '800',
    color: '#333',
  },

  imageItem: {
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#4d4d4d',
  },

  imageItemImage: {
    height: 120,
    width: '60%', 
    marginRight: 10,
  },

  imageItemDetails: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },

  imageItemDetailsName: {
    fontWeight: '500',
    marginBottom: 10,
  },

  imageItemDetailsAuthor: {
    fontWeight: '300',
  },
});