AURA-features-DEMO
Innovative Robotics and Smart City Solutions
This repository contains the documentation for two key projects: AURA (Automated Road Health Analyzer), a smart city initiative for infrastructure management, and Xypher Bot, an autonomous surveying robot.

1. Project AURA (Automated Road Health Analyzer)
AURA is an intelligent edge computing platform that uses sensor fusion to automatically detect, classify, and report road hazards like potholes and cracks in real-time. It is designed as a low-cost, scalable system to replace subjective, labor-intensive manual road surveys with an objective, continuous, and cost-effective solution tailored for urban environments. 





The Problem

For Drivers: The current process of reporting road damage is frustrating and manual, with no guarantee of a fix. Hitting potholes can lead to vehicle damage and safety concerns. 



For Cities: Without accurate, real-time data on the location and severity of road damage, municipalities cannot prioritize repairs effectively, leading to wasted resources and unsafe roads. 

The Solution
AURA is a smart hardware "black box" and App combination that connects to a vehicle's dashcam and impact sensors. The system processes all sensor data locally on the edge device in real-time. When its AI model confirms a pothole, the unit sends a small, efficient data packet containing the precise GPS location, a severity score, and a confirmation image to a cloud server. This approach powers a live hazard map for city authorities and provides real-time alerts to drivers without high data costs. 




Key Features

Automated Detection: Intelligently detects and classifies road anomalies using a sensor fusion approach. 



Data-Driven Maintenance: Provides municipal engineers with a prioritized, data-driven action plan to fix the most severe problems first. 


Real-Time Driver Alerts: A mobile app provides real-time voice and visual alerts to drivers for confirmed hazards ahead. 


Low-Cost & Scalable: Designed with affordable, commodity hardware to be financially accessible for budget-constrained municipalities. 



Privacy by Design: Built to comply with data protection regulations by performing on-device analysis and anonymization, ensuring user privacy. 



Efficient & Objective: Replaces slow, subjective manual surveys with a continuous and automated data stream for infrastructure management. 

Technology Stack
Hardware (Onboard Unit):


Compute Module: Raspberry Pi 



Vision Sensor: Camera Module / Dashcam 



Inertial Measurement Unit (IMU): MPU6050 (6-axis accelerometer and gyroscope) 



Location Sensor: GPS Module 


Audio Sensor: Microphone (for sound-based verification) 


Artificial Intelligence (AI):


Computer Vision: Utilizes CNN models like YOLOv8 for visual anomaly detection. 



Vibration Analysis: A time-series model (e.g., LSTM) processes IMU data to identify vibration patterns of road events. 


Sensor Fusion Classifier: A final machine learning model that combines inputs from both vision and vibration models for high-confidence classification (e.g., distinguishing a pothole from a speed bump). 


Cloud Backend:

Designed for massive scalability on a platform like AWS. 


Features include data ingestion (MQTT), stream processing (Kafka/Kinesis), and a user-facing dashboard with interactive maps and analytics.
