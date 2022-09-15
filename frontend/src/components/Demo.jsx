import React from 'react'


const Demo = ({ options }) => {
    const [values, setValues] = React.useState([]);


    React.useEffect(() => {
        setValues(options)
    }, [options])

    const onClick = (x) => {
        // debugger;
        let temp = [];
        Object.assign(temp, values);

        temp = temp.map(o => { return { ...o, checked: false } })
        const find = temp.findIndex(y => y.id === x.id);

        temp[find] = {
            ...temp[find],
            checked: temp[find].checked ? false : true
        }
        console.log(temp);
        setValues(temp)
    }

    return (
        <div>

            {
                values.map(x => (

                    <button style={{ padding: "20px", margin: "10px", backgroundColor: x.checked ? "red" : "orange" }} onClick={() => onClick(x)} key={x.id} >
                        {/* {x.name} */}

                        {x.checked ? "Yes" : "No"}
                    </button>
                ))
            }
        </div>
    )
}

export default Demo