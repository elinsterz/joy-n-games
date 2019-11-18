using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateFruit : MonoBehaviour

{
    public float rotx = 0;
    public float roty = 0;
    public float rotz = 0;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(rotx, 50 * Time.deltaTime, rotz); //rotates 50 degrees per second around z axis
    }
}
