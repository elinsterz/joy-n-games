using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveTransform : MonoBehaviour {

    public float speed = 1f;
    public float xpos = 7;
    public float zpos = 9;
    public float ypos = 0;

    Vector3 pointA;
    Vector3 pointB;

    // Use this for initialization
    void Start () {
        pointA = new Vector3(xpos, ypos, zpos);
        pointB = new Vector3(xpos, ypos+2, zpos);
    }
	
	// Update is called once per frame
	void Update () {
        // below code is wrong! 
        //transform.position.z += 1; 

        //to move position z by 1 very frame
        //transform.position += new Vector3(0,0,.05f);

        //PingPong between 0 and 1
        float time = Mathf.PingPong(Time.time * speed, 1);
        transform.position = Vector3.Lerp(pointA, pointB, time);
    }
}
