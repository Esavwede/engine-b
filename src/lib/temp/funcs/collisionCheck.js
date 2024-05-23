

function checkCollision(entity, boundry)
{
    if( entity.x > boundry )
    {
        entity['x'] = boundry - entity['width']
    }
}