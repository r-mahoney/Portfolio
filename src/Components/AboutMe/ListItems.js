import React from "react";
import { ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

function ListItems({ listicle }) {
    return (
        <ListItem>
            <ListIcon as={MdCheckCircle} />
            {listicle}
        </ListItem>
    );
}

export default ListItems;
