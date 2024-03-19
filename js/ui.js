export function reload(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let element = document.createElement('div')
        let title = document.createElement('span')
        let time = document.createElement('span')
        let el_del = document.createElement('button')
        let del_img = document.createElement('img')

        element.classList.add('element')
        title.classList.add('title')
        time.classList.add('time')
        el_del.classList.add('delete')

        title.innerHTML = item.task
        time.innerHTML = item.time

        del_img.src = './icons/delete.png'

        place.append(element)
        element.append(title, time, el_del)
        el_del.append(del_img)

        el_del.onclick = () => {
            let itemIdx = arr.findIndex(el => el.id === item.id)
            arr.splice(itemIdx, 1)
            element.remove()
        }
    }
}