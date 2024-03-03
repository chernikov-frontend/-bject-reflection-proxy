export default function getSpecialAttack(character) {
    const special = character.special;
    const specialAttack = special.map(item => {
        if (item.description === undefined ) {
            return {
            id: item.id,
            name: item.name,
            icon: item.icon,
            description: 'Описание недоступно'
            }
        } else {
            return {
            id: item.id,
            name: item.name,
            icon: item.icon,
            description: item.description
            }
        }
        })
    return specialAttack;
}