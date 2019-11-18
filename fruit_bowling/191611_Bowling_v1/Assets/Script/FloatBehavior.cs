using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FloatBehavior : MonoBehaviour {
	
	float originalY;

	public float floatStrength = 2;

	// Use this for initialization
	void Start () {
		this.originalY = this.transform.position.y;
	}
	
	// Update is called once per frame
	void Update () {
		transform.position = new Vector3 (transform.position.x, originalY + ((float)Mathf.Sin(Time.time) * floatStrength), transform.position.z);
	}
}
